import { Assets, FixedBottomCTA, Flex, NavigationBar, Spacing, TextFieldLine, Toast, Top } from 'ishopcare-lib';
import { useNavigate } from 'react-router';
import { overlay } from 'overlay-kit';

export function MerchantInfoPage() {
  const navigate = useNavigate();
  return (
    <>
      <NavigationBar left={<Assets.Icon name="icon-arrow-left-mono" shape={{ width: 32, height: 32 }} />} />
      <Top
        title={<Top.TitleParagraph>매장 정보를 입력주세요</Top.TitleParagraph>}
        subtitle={<Top.SubTitleParagraph>OOO님의 매장 정보가 필요해요.</Top.SubTitleParagraph>}
      />
      <Spacing size={20} />
      <Flex direction="column" css={{ padding: '0 24px', gap: 20 }}>
        <TextFieldLine placeholder="상호명" />
        <TextFieldLine placeholder="사업자등록번호" />
        <TextFieldLine
          placeholder="주소"
          readOnly={true}
          onClick={() => {
            navigate('/address');
          }}
        />
        <TextFieldLine placeholder="상세주소" />
      </Flex>
      <FixedBottomCTA
        onClick={() => {
          overlay.open(({ isOpen, close }) => {
            return <Toast isOpen={isOpen} close={close} type="warn" message="이미 계약된 매장이에요" delay={1500} />;
          });
          navigate('/business-info');
        }}
      >
        다음
      </FixedBottomCTA>
    </>
  );
}
