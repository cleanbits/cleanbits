import typescript from "@rollup/plugin-typescript";

const config = {
  input: "index.ts",
  output: {
    file: "dist/index.js",
    format: "es",
  },
  plugins: [typescript()],
};

export default config;
