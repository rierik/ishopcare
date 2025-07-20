import { Assets, FixedBottomCTA, Flex, Spacing, Top } from 'ishopcare-lib';
import { useNavigate } from 'react-router';

export function StartPage() {
  const navigate = useNavigate();

  return (
    <>
      <Spacing size={20} />
      <Flex css={{ padding: '0 24px' }}>
        <Assets.Image src="https://static.toss.im/png-icons/timeline/ishopcare-logo.jpeg" height={24} />
      </Flex>
      <Top
        title={
          <Top.TitleParagraph>
            아이샵케어 프론트엔드
            <br />
            기술과제를 시작할게요
          </Top.TitleParagraph>
        }
      />
      <FixedBottomCTA
        onClick={async () => {
          navigate('/basic-info');
        }}
      >
        기술과제 시작하기
      </FixedBottomCTA>
    </>
  );
}
