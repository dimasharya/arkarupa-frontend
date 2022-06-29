export const getRoles = (data) => {
  if (data === "pm") {
    return "Project Manager";
  } else if (data === "spv") {
    return "Supervisor";
  } else if (data === "sm") {
    return "Site Manager";
  } else if (data === "qs") {
    return "Quantity Surveyor";
  } else if (data === "se") {
    return "Staff Engineer";
  }else if (data === "adm") {
    return "Administrator";
  }
};
