import styled from "styled-components";

import { useWindowSize } from "../hooks/useWindowSize";
import { usePopover } from "../hooks/usePopover";
import { windowSizes } from "../utils/constants";
import { ArrowContainer, Popover } from "react-tiny-popover";
import {
  HiOutlineAdjustmentsHorizontal,
  HiOutlineQuestionMarkCircle,
} from "react-icons/hi2";

import UpdateSettingsForm from "../features/settings/UpdateSettingsForm";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import PopoverContent from "../ui/PopoverContent";
import ButtonText from "../ui/ButtonText";

const CenteredPopoverContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

function Settings() {
  const { isPopoverOpen, openPopover, closePopover, boxContainerPopoverRef } =
    usePopover();

  const { width } = useWindowSize();
  return (
    <>
      <Row type="horizontal" $marginTop="6rem">
        <Heading as="h1">
          <span>
            <HiOutlineAdjustmentsHorizontal />
          </span>
          Update Hotel Settings
          <CenteredPopoverContainer>
            <Popover
              isOpen={isPopoverOpen}
              positions={width >= windowSizes.tablet ? ["right"] : ["bottom"]}
              padding={10}
              reposition={false}
              onClickOutside={closePopover}
              parentElement={boxContainerPopoverRef.current}
              content={({ position, childRect, popoverRect }) => (
                <ArrowContainer
                  position={position}
                  childRect={childRect}
                  popoverRect={popoverRect}
                  arrowColor={"var(--color-grey-400)"}
                  arrowSize={8}
                >
                  <PopoverContent>
                    &#10095; Change the values and it will be updated
                    automatically
                  </PopoverContent>
                </ArrowContainer>
              )}
            >
              <ButtonText
                type="form"
                onClick={openPopover}
                onMouseEnter={openPopover}
                onMouseLeave={closePopover}
                whileHover={{ scale: 1.8 }}
                whileTap={
                  width >= windowSizes.tablet ? { scale: 1 } : { scale: 2 }
                }
                transition={{ duration: 0.3, type: "spring", stiffness: 500 }}
              >
                <HiOutlineQuestionMarkCircle />
              </ButtonText>
            </Popover>
          </CenteredPopoverContainer>

        </Heading>
      </Row>
      <UpdateSettingsForm />
    </>
  );
}

export default Settings;
