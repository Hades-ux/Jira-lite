export const getFirebaseErrorMessage = (code) => {
  switch (code) {
    case "auth/email-already-in-use":
      return "User already exists";

    case "auth/user-not-found":
      return "User not found";

    case "auth/invalid-credential":
      return "Invalid email or password";

    case "auth/weak-password":
      return "Password is too weak";

    case "auth/too-many-requests":
      return "Too many login attempts. Please try again later.";

    case "auth/network-request-failed":
      return "Network error. Please check your connection.";

    case "auth/popup-closed-by-user":
      return "Google sign-in was cancelled.";

    case "auth/popup-blocked":
      return "Popup was blocked. Please allow popups and try again.";

    default:
      return "Something went wrong. Please try again later.";
  }
};
