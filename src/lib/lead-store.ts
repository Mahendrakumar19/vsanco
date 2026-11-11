import fs from "fs/promises";
import path from "path";
import crypto from "crypto";
import { LeadSubmission } from "./validation/leads";

export interface StoredLead extends Omit<LeadSubmission, "websiteUrl"> {
  id: string;
  createdAt: string;
  updatedAt: string;
  consentAt: string;
  status: "new" | "assigned" | "contacted" | "qualified" | "closed" | "spam";
}

const DATA_DIR = path.join(process.cwd(), "data");
const LEADS_FILE = path.join(DATA_DIR, "leads.json");

async function ensureDataDirectory() {
  try {
    await fs.mkdir(DATA_DIR, { recursive: true });
  } catch (error) {
    // Directory might already exist
  }
}

export async function saveLead(submission: LeadSubmission): Promise<StoredLead> {
  await ensureDataDirectory();

  const now = new Date().toISOString();
  const id = `lead_${crypto.randomBytes(8).toString("hex")}`;

  const { websiteUrl, ...leadData } = submission;

  const leadRecord: StoredLead = {
    ...leadData,
    id,
    createdAt: now,
    updatedAt: now,
    consentAt: now,
    status: "new",
  };

  let existingLeads: StoredLead[] = [];
  try {
    const data = await fs.readFile(LEADS_FILE, "utf-8");
    existingLeads = JSON.parse(data);
  } catch (error) {
    existingLeads = [];
  }

  existingLeads.unshift(leadRecord);

  // Keep a maximum of 1000 leads locally in JSON store
  if (existingLeads.length > 1000) {
    existingLeads = existingLeads.slice(0, 1000);
  }

  await fs.writeFile(LEADS_FILE, JSON.stringify(existingLeads, null, 2), "utf-8");

  // Operational notification / simulation
  console.log(`[Lead Created] ID: ${id} | Company: ${leadRecord.companyName} | Solution: ${leadRecord.solutionSlug}`);

  return leadRecord;
}

export async function getLeads(): Promise<StoredLead[]> {
  try {
    const data = await fs.readFile(LEADS_FILE, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    return [];
  }
}
