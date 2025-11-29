export const APP_NAME = "Guardian SOS";

// Default location (New York City for demo purposes if geolocation fails)
export const DEFAULT_LOCATION = {
  lat: 40.7128,
  lng: -74.0060
};

export const GEMINI_MODEL_FLASH = 'gemini-2.5-flash';

// Radius options for Safe Zone in meters
export const SAFE_ZONE_RADIUS_OPTIONS = [100, 500, 1000, 5000];

export const SYSTEM_INSTRUCTION_SAFETY_BOT = `
You are the Guardian AI, a specialized safety assistant for an SOS mobile application. 
Your primary goal is to provide calm, clear, and actionable safety advice.
- Keep responses concise (under 3 sentences when possible) as the user might be in distress.
- If the user indicates immediate danger, advise them to contact emergency services (911/112) immediately.
- Provide tips on self-defense, first aid, or situational awareness when asked.
`;
