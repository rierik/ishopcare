import { Assets, Checkbox, colors, FixedBottomCTA, Flex, ListRow, NavigationBar, Spacing, Top } from 'ishopcare-lib';
import { useNavigate } from 'react-router';

export function BusinessInfoPage() {
  const navigate = useNavigate();
  return (
    <>
      <NavigationBar left={<Assets.Icon name="icon-arrow-left-mono" shape={{ width: 32, height: 32 }} />} />
      <Top
        title={<Top.TitleParagraph>OOO 매장의 업종을 알려주세요</Top.TitleParagraph>}
        subtitle={<Top.SubTitleParagraph>업종에 따라 제출해야할 서류가 달라요.</Top.SubTitleParagraph>}
      />
      <Spacing size={20} />
      <Flex direction="column">
        <ListRow
          contents={<ListRow.Texts type="1RowTypeA" top="음식점업" topProps={{ color: colors.grey700 }} />}
          right={<Checkbox.Line checked={true} size={20} />}
        />
        <ListRow
          contents={<ListRow.Texts type="1RowTypeA" top="뷰티업" topProps={{ color: colors.grey700 }} />}
          right={<Checkbox.Line checked={false} size={20} />}
        />
        <ListRow
          contents={<ListRow.Texts type="1RowTypeA" top="병원" topProps={{ color: colors.grey700 }} />}
          right={<Checkbox.Line checked={false} size={20} />}
        />
        <ListRow
          contents={<ListRow.Texts type="1RowTypeA" top="학원" topProps={{ color: colors.grey700 }} />}
          right={<Checkbox.Line checked={false} size={20} />}
        />
        <ListRow
          contents={<ListRow.Texts type="1RowTypeA" top="담배" topProps={{ color: colors.grey700 }} />}
          right={<Checkbox.Line checked={false} size={20} />}
        />
        <ListRow
          contents={<ListRow.Texts type="1RowTypeA" top="숙박업" topProps={{ color: colors.grey700 }} />}
          right={<Checkbox.Line checked={false} size={20} />}
        />
        <ListRow
          contents={<ListRow.Texts type="1RowTypeA" top="기타" topProps={{ color: colors.grey700 }} />}
          right={<Checkbox.Line checked={false} size={20} />}
        />
      </Flex>
      <FixedBottomCTA
        onClick={() => {
          navigate('/complete');
        }}
      >
        제출하기
      </FixedBottomCTA>
    </>
  );
}
