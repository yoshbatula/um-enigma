/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        heroGradient:
          "linear-gradient(180deg, rgba(12,98,145,1) 5%, rgba(24,24,24,1) 63%, rgba(24,24,24,1) 100%)",
      },
      fontFamily:{
        'Poppins-Light':'Poppins-Light',
        'Poppins-Regular':'Poppins-Regular',
        'Poppins-Medium':'Poppins-Medium',
        'Poppins-SemiBold':'Poppins-SemiBold',
        'Poppins-Bold':'Poppins-Bold',
        'Poppins-Black':'Poppins-Black',
      }
    },
  },
  plugins: [],
};
