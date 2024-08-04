import styled from "styled-components";

import { useWindowSize } from "../hooks/useWindowSize";
import { usePopover } from "../hooks/usePopover";
import { windowSizes } from "../utils/constants";
import { screenSizes } from "../utils/constants";
import { HiMiniServerStack , HiOutlineQuestionMarkCircle } from "react-icons/hi2";
import { ArrowContainer, Popover } from "react-tiny-popover";

import ButtonText from "../ui/ButtonText";
import Heading from "../ui/Heading";
import Row from "../ui/Row";
import PopoverContent from "../ui/PopoverContent";
import Uploader from "../data/Uploader";


const DataLayout = styled.main`
  display: grid;
  grid-template-columns: 52rem;
  align-content: start;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);

  @media (max-width: ${screenSizes.tablet}) {
    grid-template-columns: 1fr;
    padding: 1rem 1.8rem;
    gap: 1.6rem;
  }
`;

const CenteredPopoverContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

function LoadData() {

  const { isPopoverOpen, openPopover, closePopover, boxContainerPopoverRef } =
    usePopover();

  const { width } = useWindowSize();

  return (
    <>
      <Row type="horizontal" $marginTop="6rem">

        <Heading as="h1">

          <span>
            <HiMiniServerStack  />
          </span>

          If you don't see any data, try clicking on one of these buttons

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
                    &#9888; This feature is experimental and may fail!!!
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

      <DataLayout>
        <Uploader />
      </DataLayout>
    </>
  )
}

export default LoadData
