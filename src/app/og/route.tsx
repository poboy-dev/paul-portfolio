import { ImageResponse } from "next/og";
import { person } from "@/app/resources/content";

export const runtime = "edge";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const title = url.searchParams.get("title") || "Portfolio";

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
          padding: "80px",
          background: "#151515",
          fontSize: 64,
          fontWeight: 600,
          color: "#fff",
          fontFamily: "sans-serif",
          textAlign: "center",
        }}
      >
        <div style={{ fontSize: 96 }}>{title}</div>
        <div
          style={{
            marginTop: 40,
            display: "flex",
            alignItems: "center",
            gap: 40,
          }}
        >
          <img
            src={person.avatar}
            width="180"
            height="180"
            style={{ borderRadius: "50%" }}
            alt="Avatar"
          />
          <div style={{ textAlign: "left" }}>
            <div style={{ fontSize: 48 }}>{person.name}</div>
            <div style={{ fontSize: 32, opacity: 0.7 }}>{person.role}</div>
          </div>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
    }
  );
}
