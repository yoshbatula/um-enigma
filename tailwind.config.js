/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        heroGradient:
          "linear-gradient(180deg, rgba(12,98,145,1) 5%, rgba(24,24,24,1) 40%, rgba(0,0,0,1) 100%)",
        neonGradient:
         " linear-gradient(90deg, rgba(170,195,209,0.1) 0%,rgba(26,107,151,1) 50%,  rgba(170,195,209,0.1) 100%);",
        crimsonGradient:
        'radial-gradient(circle, rgba(131,34,77,1) 0%, rgba(131,34,77,1) 23%, rgba(255,255,255,0.000001) 70%)',
        crimsonGradient2:
        'radial-gradient(circle, rgba(131,34,77,1) 0%, rgba(131,34,77,1) 15%, rgba(255,255,255,0.000001) 70%)',
        wheelGradient:
        'radial-gradient(circle, rgba(255,255,255,0.7038807759431898) 10%, rgba(255,255,255,0) 70%, rgba(255,255,255,0) 100%);',
        rotatingCircleGradient:
        ' linear-gradient(135deg, rgba(126,25,70,1) 0%, rgba(255,255,255,1) 100%)'
      },

      fontFamily: {
        "Poppins-Light": "Poppins-Light",
        "Poppins-Regular": "Poppins-Regular",
        "Poppins-Medium": "Poppins-Medium",
        "Poppins-SemiBold": "Poppins-SemiBold",
        "Poppins-Bold": "Poppins-Bold",
        "Poppins-Black": "Poppins-Black",
      },
    },
  },
  plugins: [],
};
