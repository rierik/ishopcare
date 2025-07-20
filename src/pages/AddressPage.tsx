import { Assets, colors, Flex, ListHeader, ListRow, NavigationBar, TextFieldLine, Top } from 'ishopcare-lib';

export function AddressPage() {
  return (
    <>
      <NavigationBar left={<Assets.Icon name="icon-arrow-left-mono" shape={{ width: 32, height: 32 }} />} />
      <Top title={<Top.TitleParagraph>주소 검색하기</Top.TitleParagraph>} />
      <Flex direction="column" css={{ padding: '0 24px', gap: 20 }}>
        <TextFieldLine placeholder="주소" />
      </Flex>
      <ListHeader
        title={
          <ListHeader.TitleParagraph fontWeight="bold" color={colors.grey600}>
            테헤란로 검색 결과
          </ListHeader.TitleParagraph>
        }
      />
      <Flex direction="column">
        <ListRow
          contents={
            <ListRow.Texts
              type="2RowTypeA"
              top="서울특별시 강남구 테헤란로142"
              topProps={{ color: colors.grey800, fontWeight: 'semibold' }}
              bottom="06236"
              bottomProps={{ color: colors.grey500, fontWeight: 'medium' }}
            />
          }
        />
        <ListRow
          contents={
            <ListRow.Texts
              type="2RowTypeA"
              top="서울특별시 강남구 테헤란로142"
              topProps={{ color: colors.grey800, fontWeight: 'semibold' }}
              bottom="06236"
              bottomProps={{ color: colors.grey500, fontWeight: 'medium' }}
            />
          }
        />
        <ListRow
          contents={
            <ListRow.Texts
              type="2RowTypeA"
              top="서울특별시 강남구 테헤란로142"
              topProps={{ color: colors.grey800, fontWeight: 'semibold' }}
              bottom="06236"
              bottomProps={{ color: colors.grey500, fontWeight: 'medium' }}
            />
          }
        />
        <ListRow
          contents={
            <ListRow.Texts
              type="2RowTypeA"
              top="서울특별시 강남구 테헤란로142"
              topProps={{ color: colors.grey800, fontWeight: 'semibold' }}
              bottom="06236"
              bottomProps={{ color: colors.grey500, fontWeight: 'medium' }}
            />
          }
        />
        <ListRow
          contents={
            <ListRow.Texts
              type="2RowTypeA"
              top="서울특별시 강남구 테헤란로142"
              topProps={{ color: colors.grey800, fontWeight: 'semibold' }}
              bottom="06236"
              bottomProps={{ color: colors.grey500, fontWeight: 'medium' }}
            />
          }
        />
      </Flex>
    </>
  );
}
