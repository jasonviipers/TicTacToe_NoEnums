import styled from 'styled-components';
import { Mail, Facebook } from 'lucide-react';
import { z } from 'zod';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import SigninDora from '@/assets/img/signin_Dora.png'
import { useNavigate } from 'react-router-dom';

// import { useAuth } from "@/lib/auth";

const schema = z.object({
    email: z.string().email({ message: 'Invalid email address' }),
});

// Type for form values
type SignInFormValues = z.infer<typeof schema>;


function SignInPage() {
    // const auth = useAuth();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<SignInFormValues>({
        resolver: zodResolver(schema),
      });
    
      // Handle form submission
      const onSubmit = (data: SignInFormValues) => {
        // Trigger the passwordless sign-in logic here
        console.log(data);
      };
    return (
        <SignInPageContainer>
        <SignInWrapper>
          <CharacterImage src={SigninDora} alt="Character Image" />
          <Title>Sign In</Title>
          <SignInForm onSubmit={handleSubmit(onSubmit)}>
            <InputContainer>
              <Mail size={20}  color='white'/>
              <InputField {...register('email')} placeholder="Email" type="email" />
            </InputContainer>
            <ErrorMessage>{errors.email?.message}</ErrorMessage>
            <SignInButton type="submit">  Sign In  Or Sign Up </SignInButton>
            <Separator>OR</Separator>
            <SocialButtons>
              <SocialButton>
                <Facebook size={20} />
              </SocialButton>
              <SocialButton>
                <Facebook size={20} />
              </SocialButton>
            </SocialButtons>
          </SignInForm>
        </SignInWrapper>
      </SignInPageContainer>
    )
}


// Main container
export const SignInPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #24292d;
`;

// Sign-in wrapper for form
export const SignInWrapper = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 20px;
  background: #161719; 
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  text-align: center;
`;

// Character image
export const CharacterImage = styled.img`
  width: 100px;
  margin-bottom: 24px;
`;

// Title of the sign in section
export const Title = styled.h1`
  color: #FFFFFF;
  margin-bottom: 32px;
`;

// Form for sign in
export const SignInForm = styled.form`
  display: flex;
  flex-direction: column;
`;

// Input container with icon
export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 48px;
  padding: 0 16px;
  border-radius: 8px;
  background-color: #272D31;
  margin-bottom: 16px;
`;

// Input field styles
const InputField = styled.input`
  flex: 1;
  background: transparent;
  border: none;
  margin-left: 10px;
  color: #FFFFFF;

  &::placeholder {
    color: #E9E9E9; 
  }

  &:focus {
    outline: none;
  }
`;

// Sign-in button
export const SignInButton = styled.button`
  background: #F0842A; 
  color: #FFFFFF;
  border: none;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 16px;
  cursor: pointer;

  &:hover {
    background: #d07322; 
  }
`;

// Error message
export const ErrorMessage = styled.span`
  color: #F44336; 
  font-size: 0.875em;
  height: 20px;
  margin-bottom: 16px;
`;

// OR separator
const Separator = styled.div`
  color: #E9E9E9; 
  margin: 24px 0;
`;

// Social buttons container
const SocialButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-bottom: 16px;
`;

// Social button
const SocialButton = styled.button`
  background: #272D31; 
  color: #FFFFFF;
  border: none;
  padding: 10px;
  border-radius: 8px;
  cursor: pointer;

  //add overlay to the icon
    &:hover {
        background: #F0842A; 
    }
`;




export default SignInPage