import { Assets, FixedBottomCTA, Flex, NavigationBar, Spacing, TextFieldLine, Toast, Top } from 'ishopcare-lib';
import { useNavigate, useLocation } from 'react-router';
import { overlay } from 'overlay-kit';
import { useState, useEffect, useCallback } from 'react';

interface AddressType {
  street: string;
  city: string;
  state: string;
  zipcode: string;
}

export function MerchantInfoPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const prevBasic = {
    name: location.state?.name ?? 'ㅇㅇㅇ',
    phone: location.state?.phone ?? '',
    email: location.state?.email ?? '',
  };

  const [name, setName] = useState(prevBasic.name);
  const [phone, setPhone] = useState(prevBasic.phone);
  const [email, setEmail] = useState(prevBasic.email);

  const [storeName, setStoreName] = useState(location.state?.storeName ?? '');
  const [bizNumber, setBizNumber] = useState(location.state?.bizNumber ?? '');

  const prevAddress = location.state?.address ?? { street: '', city: '', state: '', zipcode: '' };
  const [address, setAddress] = useState(prevAddress);

  const [detailAddress, setDetailAddress] = useState(location.state?.detailAddress ?? '');
  const [isFormValid, setIsFormValid] = useState(false);

  // 주소 상태 갱신
  useEffect(() => {
    if (location.state?.selectedAddress) {
      setAddress(location.state.selectedAddress);
    }
  }, [location.state?.selectedAddress]);

  // form 유효성 검사 감지
  useEffect(() => {
    const isAddressFilled =
      address.street.trim() !== '' &&
      address.city.trim() !== '' &&
      address.state.trim() !== '' &&
      address.zipcode.trim() !== '';

    const valid = storeName.trim() !== '' && bizNumber.length === 10 && isAddressFilled && detailAddress.trim() !== '';

    setIsFormValid(valid);
  }, [storeName, bizNumber, address, detailAddress]);

  const handleBizNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const onlyNumbers = e.target.value.replace(/[^0-9]/g, '');
    setBizNumber(onlyNumbers);
  };

  const handleAddressClick = () => {
    navigate('/address', {
      state: {
        name,
        storeName,
        bizNumber,
        detailAddress,
      },
    });
  };

  const handleNextClick = useCallback(async () => {
    try {
      const res = await fetch('/api/merchants/validation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: storeName,
          businessNumber: bizNumber,
          address: {
            street: address.street,
            city: address.city,
            state: address.state,
            zipcode: address.zipcode,
          },
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        if (data.code === 'MERCHANT_CONFLICTED') {
          overlay.open(({ isOpen, close }) => (
            <Toast isOpen={isOpen} close={close} type="warn" message="이미 계약된 매장이에요" delay={1500} />
          ));
          return;
        }
        throw new Error(data.message || '알 수 없는 오류가 발생했습니다.');
      }

      navigate('/business-info', {
        state: {
          basic: {
            name: name,
            phone: phone,
            email: email,
          },
          merchant: {
            name: storeName,
            businessNumber: bizNumber,
            address: {
              street: address.street,
              city: address.city,
              state: address.state,
              zipcode: address.zipcode,
              details: detailAddress,
            },
          },
        },
      });
    } catch (err) {
      console.error(err);
    }
  }, [bizNumber, navigate]);

  // Enter 키 눌렀을 때 넘어가기
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && isFormValid) {
        handleNextClick();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isFormValid, handleNextClick]);

  const addressString = [address.city, address.state, address.street].filter(Boolean).join(' ') || '';

  return (
    <>
      <NavigationBar
        left={
          <Assets.Icon
            name="icon-arrow-left-mono"
            shape={{ width: 32, height: 32 }}
            onClick={() => navigate('/basic-info')}
          />
        }
      />
      <Top
        title={<Top.TitleParagraph>매장 정보를 입력해주세요</Top.TitleParagraph>}
        subtitle={<Top.SubTitleParagraph>{name}님의 매장 정보가 필요해요.</Top.SubTitleParagraph>}
      />
      <Spacing size={20} />
      <Flex direction="column" css={{ padding: '0 24px', gap: 20 }}>
        <TextFieldLine placeholder="상호명" value={storeName} onChange={e => setStoreName(e.target.value)} />
        <TextFieldLine placeholder="사업자등록번호" value={bizNumber} onChange={handleBizNumberChange} maxLength={10} />
        <TextFieldLine placeholder="주소" value={addressString} readOnly onClick={handleAddressClick} />
        <TextFieldLine placeholder="상세주소" value={detailAddress} onChange={e => setDetailAddress(e.target.value)} />
      </Flex>
      <FixedBottomCTA
        onClick={() => {
          if (!isFormValid) return;
          handleNextClick();
        }}
        css={{
          backgroundColor: isFormValid ? '' : '#ccc',
          color: isFormValid ? '' : '#666',
          cursor: isFormValid ? 'pointer' : 'not-allowed',
        }}
      >
        다음
      </FixedBottomCTA>
    </>
  );
}
