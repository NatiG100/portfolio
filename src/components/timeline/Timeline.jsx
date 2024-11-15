import { TimelineContainer } from "./TimelineElements";
import TimelineItem from "./TimelineItem";

export default function Timeline({
  branchImageSrc,
  data = [
    {
      time: "",
      header: "",
      card: <div style={{ width: 40, height: 40, background: "red" }}></div>,
    },
  ],
}) {
  return (
    <TimelineContainer>
      {data.map((dataElement, idx) => (
        <TimelineItem
          key={idx}
          card={dataElement.card}
          header={dataElement.header}
          branchImageSrc={branchImageSrc}
          time={dataElement.time}
          last={data.length === idx + 1}
        />
      ))}
    </TimelineContainer>
  );
}
