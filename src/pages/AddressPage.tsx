import { useState, useEffect } from 'react';
import { Assets, colors, Flex, ListHeader, ListRow, NavigationBar, TextFieldLine, Top } from 'ishopcare-lib';
import { useNavigate, useLocation } from 'react-router';

export function AddressPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const [searchText, setSearchText] = useState('');
  const [addresses, setAddresses] = useState([]);

  // 이전 페이지에서 넘어온 state를 유지하기 위해서
  const prevState = location.state || {};

  useEffect(() => {
    if (searchText.length < 2) {
      setAddresses([]);
      return;
    }

    const fetchAddresses = async () => {
      try {
        const res = await fetch(`/api/addresses?search=${encodeURIComponent(searchText)}`);
        if (!res.ok) throw new Error('주소 검색 실패');
        const data = await res.json();
        setAddresses(data);
      } catch (err) {
        console.error(err);
        setAddresses([]);
      }
    };

    fetchAddresses();
  }, [searchText]);

  const handleSelectAddress = (selectedAddress: { street: string; city: string; state: string; zipcode: string }) => {
    navigate('/merchant-info', {
      state: {
        ...prevState,
        selectedAddress,
      },
    });
  };

  return (
    <>
      <NavigationBar left={<Assets.Icon name="icon-arrow-left-mono" shape={{ width: 32, height: 32 }} />} />
      <Top title={<Top.TitleParagraph>주소 검색하기</Top.TitleParagraph>} />
      <Flex direction="column" css={{ padding: '0 24px', gap: 20 }}>
        <TextFieldLine placeholder="주소" value={searchText} onChange={e => setSearchText(e.target.value)} />
      </Flex>
      <ListHeader
        title={
          <ListHeader.TitleParagraph fontWeight="bold" color={colors.grey600}>
            검색 결과
          </ListHeader.TitleParagraph>
        }
      />
      <Flex direction="column">
        {addresses.map(({ street, city, state, zipcode }, idx) => (
          <ListRow
            key={idx}
            onClick={() => handleSelectAddress({ street, city, state, zipcode })}
            contents={
              <ListRow.Texts
                type="2RowTypeA"
                top={`${city} ${state} ${street}`}
                topProps={{ color: colors.grey800, fontWeight: 'semibold' }}
                bottom={zipcode}
                bottomProps={{ color: colors.grey500, fontWeight: 'medium' }}
              />
            }
          />
        ))}
      </Flex>
    </>
  );
}
