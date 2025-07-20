import { Assets, Flex, NavigationBar, TextFieldLine, Top, Spacing, FixedBottomCTA } from 'ishopcare-lib';
import { useNavigate } from 'react-router';

export function BasicInfoPage() {
  const navigate = useNavigate();
  return (
    <>
      <NavigationBar left={<Assets.Icon name="icon-arrow-left-mono" shape={{ width: 32, height: 32 }} />} />
      <Top
        title={<Top.TitleParagraph>대표자 정보를 입력해주세요</Top.TitleParagraph>}
        subtitle={<Top.SubTitleParagraph>사업자등록증 상의 대표자 정보를 입력해야 해요.</Top.SubTitleParagraph>}
      />
      <Spacing size={20} />
      <Flex direction="column" css={{ padding: '0 24px', gap: 20 }}>
        <TextFieldLine placeholder="이름" />
        <TextFieldLine placeholder="휴대폰 번호" />
        <TextFieldLine placeholder="이메일" />
      </Flex>
      <FixedBottomCTA
        onClick={() => {
          navigate('/merchant-info');
        }}
      >
        다음
      </FixedBottomCTA>
    </>
  );
}
