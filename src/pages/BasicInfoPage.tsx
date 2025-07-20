import { Assets, Flex, NavigationBar, TextFieldLine, Top, Spacing, FixedBottomCTA } from 'ishopcare-lib';
import { useNavigate } from 'react-router';
import { useEffect, useRef, useState } from 'react';

export function BasicInfoPage() {
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const nameInputRef = useRef<HTMLInputElement>(null);

  // 휴대폰 번호 숫자만 허용
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const onlyNumbers = e.target.value.replace(/[^0-9]/g, '');
    setPhone(onlyNumbers);
  };

  const isValidPhone = phone.length === 11;
  const isValidEmail = email.includes('@') && email.includes('.com');

  const isFormValid = name !== '' && isValidPhone && isValidEmail;

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter' && isFormValid) {
      navigate('/merchant-info', { state: { name, phone, email } });
    }
  };
  useEffect(() => {
    if (isFormValid) {
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isFormValid, navigate]);

  useEffect(() => {
    nameInputRef.current?.focus();
  }, []);

  return (
    <>
      <NavigationBar
        left={
          <Assets.Icon name="icon-arrow-left-mono" shape={{ width: 32, height: 32 }} onClick={() => navigate('/')} />
        }
      />
      <Top
        title={<Top.TitleParagraph>대표자 정보를 입력해주세요</Top.TitleParagraph>}
        subtitle={<Top.SubTitleParagraph>사업자등록증 상의 대표자 정보를 입력해야 해요.</Top.SubTitleParagraph>}
      />
      <Spacing size={20} />
      <Flex direction="column" css={{ padding: '0 24px', gap: 20 }}>
        <TextFieldLine placeholder="이름" value={name} onChange={e => setName(e.target.value)} ref={nameInputRef} />
        <TextFieldLine placeholder="휴대폰 번호" value={phone} onChange={handlePhoneChange} />
        <TextFieldLine placeholder="이메일" value={email} onChange={e => setEmail(e.target.value)} />
      </Flex>
      <FixedBottomCTA
        onClick={() => {
          if (!isFormValid) return;
          navigate('/merchant-info', { state: { name, phone, email } });
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
