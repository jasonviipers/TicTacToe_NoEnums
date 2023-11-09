import React, { useState, useCallback, useRef } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Key } from 'lucide-react';
import SigninDora from '@/assets/img/signin_Dora.png';
import { CharacterImage, ErrorMessage, InputContainer, SignInButton, SignInForm, SignInPageContainer, SignInWrapper, Title } from './SignInPage';

const schema = z.object({
  code: z.string().length(6, { message: 'Invalid code' }).regex(/^\d+$/, 'Invalid code'),
});

const OTP_COUNT = 6;
const initialValues = Array(OTP_COUNT).fill("");

type AuthentificationInFormValues = z.infer<typeof schema>;

const Authentification: React.FC = () => {
  const {
    handleSubmit,
    formState: { errors },
  } = useForm<AuthentificationInFormValues>({
    resolver: zodResolver(schema),
  });
  const [otp, setOtp] = useState<string[]>(initialValues);
  const otpRef = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = useCallback((index: number, value: string) => {
    if (isNaN(Number(value))) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (index < OTP_COUNT - 1 && value) {
      otpRef.current[index + 1]?.focus();
    }
  }, [otp]);

  const onSubmit = useCallback((data: AuthentificationInFormValues) => {
    console.log(data);
  }, []);

  return (
    <SignInPageContainer>
      <SignInWrapper>
        <CharacterImage src={SigninDora} alt="Character Image" />
        <Title>Authentification</Title>
        <SignInForm onSubmit={handleSubmit(onSubmit)}>
          <InputContainer>
            <Key size={20} color='white' />
            {initialValues.map((_, index) => (
              <OTPInputField
                key={index}
                ref={el => otpRef.current[index] = el}
                value={otp[index]}
                onChange={(e) => handleChange(index, e.target.value)}
                maxLength={1}
                placeholder="•"
                type="text"
                autoComplete="off"
              />
            ))}
          </InputContainer>
            <ErrorMessage> {errors.code?.message}</ErrorMessage>
            <SignInButton>Confirm</SignInButton>
        </SignInForm>
      </SignInWrapper>
    </SignInPageContainer>
  )
};

const OTPInputField = styled.input`
  width: 2.5em; /* Width of each input field */
  margin: 0 0.25em; /* Spacing between each input field */
  text-align: center;
  font-size: 1em; /* Font size of the input characters */
  padding: 0.5em; /* Padding inside the input fields */
  border: 1px solid #ccc; /* Border color */
  border-radius: 4px; /* Border radius for rounded corners */

  &:focus {
    outline: none;
    border-color: #F0842A; /* Border color when the input is focused */
  }

  /* Style for invalid input */
  &:invalid {
    border-color: #dc3545; /* Border color when the input is invalid */
  }

  /* Placeholder color */
  &::placeholder {
    color: #272D31; 
  }
`;

export default React.memo(Authentification);
