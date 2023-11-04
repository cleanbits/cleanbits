export const cls = (...args: any[]) => {
    return args.filter(Boolean).join(" ");
};
