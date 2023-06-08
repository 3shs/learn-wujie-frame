const map: Record<string, string> = {
  "//127.0.0.1:5174/": "//wujie-micro.github.io/demo-react17/",
  "//127.0.0.1:5175/": "//wujie-micro.github.io/demo-vue2/",
}

export default function hostMap(host: string) {
  if (import.meta.env.MODE === "production") return map[host]
  return host
}
