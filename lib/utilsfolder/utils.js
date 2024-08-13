export const getVal = (obj) => {
  const feat = obj;
  return feat.properties.GDP_MD_EST / Math.max(1e5, feat.properties.POP_EST);
};
export function getFileExtension(filePath) {
  const parts = filePath?.split(".");
  if (parts?.length > 1) {
    return parts?.pop()?.toLowerCase();
  } else {
    return "";
  }
}

export function getStartEndDate(dateString) {
  const [year, month] = dateString.split("-").map(Number);
  const startDate = new Date(year, month - 1, 1);
  const endDate = new Date(year, month, 0);
  return { startDate, endDate };
}
