import {
  Assets,
  Checkbox,
  colors,
  FixedBottomCTA,
  Flex,
  ListRow,
  NavigationBar,
  Spacing,
  Top,
  ListHeader,
} from 'ishopcare-lib';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { httpClient } from 'ishopcare-lib';

interface Category {
  name: string;
  value: string;
}

export function BusinessInfoPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategoryValue, setSelectedCategoryValue] = useState<string | null>(null);

  const prevState = location.state;

  // 데이터 보내기 위한 필수 값 있는지 없는지 판단
  if (!prevState?.basic || !prevState?.merchant) {
    return <div>이전 입력 정보가 없습니다. 처음부터 다시 진행해주세요.</div>;
  }

  const { basic, merchant } = prevState;

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const res = (await httpClient.get('/api/business-categories')) as Category[];
        setCategories(res);
      } catch (err) {
        console.error('업종 목록 불러오기 실패:', err);
      }
    };
    fetchCategories();
  }, []);

  const handleSubmit = async () => {
    if (!selectedCategoryValue) return alert('업종을 선택해주세요.');

    try {
      await httpClient.post('/api/contracts', {
        json: {
          basic,
          merchant,
          businessCategory: selectedCategoryValue,
        },
      });

      navigate('/complete');
    } catch (err) {
      console.error('제출 실패:', err);
      alert('제출에 실패했습니다. 다시 시도해주세요.');
    }
  };

  return (
    <>
      <NavigationBar
        left={
          <Assets.Icon
            name="icon-arrow-left-mono"
            shape={{ width: 32, height: 32 }}
            onClick={() => navigate('/merchant-info')}
          />
        }
      />
      <Top
        title={<Top.TitleParagraph>{merchant.name} 매장의 업종을 알려주세요</Top.TitleParagraph>}
        subtitle={<Top.SubTitleParagraph>업종에 따라 제출해야할 서류가 달라요.</Top.SubTitleParagraph>}
      />
      <Spacing size={20} />
      <ListHeader
        title={
          <ListHeader.TitleParagraph fontWeight="bold" color={colors.grey600}>
            업종 선택
          </ListHeader.TitleParagraph>
        }
      />
      <Flex direction="column">
        {categories.map(category => (
          <ListRow
            key={category.value}
            contents={<ListRow.Texts type="1RowTypeA" top={category.name} topProps={{ color: colors.grey700 }} />}
            onClick={() => setSelectedCategoryValue(category.value)}
            right={<Checkbox.Line checked={selectedCategoryValue === category.value} size={20} />}
          />
        ))}
      </Flex>

      <FixedBottomCTA
        onClick={() => {
          if (!selectedCategoryValue) return;
          handleSubmit();
        }}
        css={{
          backgroundColor: selectedCategoryValue ? '' : '#ccc',
          color: selectedCategoryValue ? '' : '#666',
          cursor: selectedCategoryValue ? 'pointer' : 'not-allowed',
        }}
      >
        제출하기
      </FixedBottomCTA>
    </>
  );
}
