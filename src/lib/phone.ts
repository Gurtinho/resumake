export const validatePhone = (phone: string) => {
  // Expressão regular simples para validar números de telefone
  const phoneRegex = /^\+?[1-9]\d{1,14}$/; // Formato E.164
  return phoneRegex.test(phone);
};