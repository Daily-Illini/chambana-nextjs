import Banner from "@components/banner";
import StoryScroll from "@components/storyScroll";
import fetchStories from "../helpers/fetchStories";

export default async function NewsPage() {
  const data = await fetchStories("news");
  console.log(data);
  return (
    <main>
      {/* TODO: remove inline styles */}
      <div style={{ display: "flex", flexDirection: "column", gap: "1em" }}>
        <StoryScroll stories={data} />
      </div>
    </main>
  );
}

export const revalidate = 60;
