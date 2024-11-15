import {
  StyledTimelineBranch,
  StyledTimelineCircle,
  StyledTimelineContainer,
  StyledTimelineContent,
  StyledTimelineHeader,
  StyledTimelineTime,
} from "./TimelineItemElements";

export default function TimelineItem({
  branchImageSrc,
  time,
  header,
  card,
  last = false,
}) {
  return (
    <StyledTimelineContainer last={last}>
      <StyledTimelineCircle />
      <StyledTimelineBranch src={branchImageSrc} />
      <StyledTimelineTime>{time}</StyledTimelineTime>
      <StyledTimelineContent>
        <StyledTimelineHeader>{header}</StyledTimelineHeader>
        {card}
      </StyledTimelineContent>
    </StyledTimelineContainer>
  );
}
