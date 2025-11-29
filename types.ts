export interface Location {
  lat: number;
  lng: number;
}

export interface Contact {
  id: string;
  name: string;
  phone: string;
  relation: string;
}

export interface SafeZone {
  center: Location;
  radius: number; // in meters
}

export interface SafetyState {
  isSOSActive: boolean;
  userLocation: Location | null;
  safeZone: SafeZone | null;
  contacts: Contact[];
  isTracking: boolean;
}

export type AlertType = 'MANUAL' | 'FALL_DETECTION' | 'GEOFENCE_BREACH' | 'PANIC_NOISE';

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}