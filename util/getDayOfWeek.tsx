import { HoursJSON } from "../src/models"

export default function getDayOfWeek(hours: HoursJSON): number[] {
  const openHours = [hours.sunday?.open, hours.monday?.open, hours.tuesday?.open, hours.wednesday?.open, hours.thursday?.open, hours.friday?.open, hours.saturday?.open]; 
  const closeHours = [hours.sunday?.close, hours.monday?.close, hours.tuesday?.close, hours.wednesday?.close, hours.thursday?.close, hours.friday?.close, hours.saturday?.close];
  const date = new Date(); 
  return [openHours[date.getDay()], closeHours[date.getDay()]]; 
}