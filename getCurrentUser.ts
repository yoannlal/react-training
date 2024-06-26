type User = {
  uuid: number;
  firstName: string;
  lastName: string;
  email: string;
};

export function getCurrentUser(token: string): User | null {
  if (token === "ACCESS") {
    return {
      uuid: 1,
      firstName: "Marco",
      lastName: "Polo",
      email: "marco@polo.com",
    };
  }

  return null;
}
