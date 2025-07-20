import { Flex, Spacing, Top, FixedBottomCTA } from 'ishopcare-lib';
import { useNavigate } from 'react-router';

export function CompletePage() {
  const navigate = useNavigate();
  return (
    <>
      <Top title={<Top.TitleParagraph>신청이 완료됐어요!</Top.TitleParagraph>} />
      <Spacing size={40} />
      <Flex alignItems="center" justifyContent="center">
        <img
          alt=""
          src="https://static.toss.im/lotties-common/check-spot-light-no-loop-apng.png"
          width={200}
          height={200}
        />
      </Flex>
      <FixedBottomCTA
        onClick={() => {
          navigate('/');
        }}
      >
        완료하기
      </FixedBottomCTA>
    </>
  );
}
