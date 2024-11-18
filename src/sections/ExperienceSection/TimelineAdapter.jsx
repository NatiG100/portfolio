import { data } from "../../assets/data/data";
import ImageDisplay from "../../components/ImageDisplay";
import { StyledFlex } from "../../components/Layout/StyledLayouts";
import { StyledTimelineHeader } from "../../components/timeline/TimelineItemElements";
import {
  HiddenOnTablet,
  StyledTImelineAdapterCard,
  StyledTimelineAdapterCardParagraph,
  StyledTimelineAdapterCardTitle,
  StyledTimelineAdapterTime,
} from "./TimelineAdapter.elements";

const timelineProps = data.experience.map((experienceItem) => ({
  card: (
    <StyledTImelineAdapterCard>
      <StyledFlex
        direction="rows"
        gap="15px"
        justifyContent="start"
        alignItems="start"
      >
        <div>
          <StyledTimelineAdapterCardTitle>
            {experienceItem.jobTitle}
          </StyledTimelineAdapterCardTitle>
          <StyledTimelineAdapterCardParagraph>
            {experienceItem.description}
          </StyledTimelineAdapterCardParagraph>
        </div>

        <HiddenOnTablet>
          <ImageDisplay img={experienceItem.logo} dimension="120px" />
        </HiddenOnTablet>
      </StyledFlex>
    </StyledTImelineAdapterCard>
  ),
  header: (
    <StyledTimelineHeader>@{experienceItem.company}</StyledTimelineHeader>
  ),
  time: (
    <StyledTimelineAdapterTime>{experienceItem.date}</StyledTimelineAdapterTime>
  ),
}));

export default timelineProps;
