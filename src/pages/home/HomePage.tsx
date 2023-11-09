import styled from 'styled-components';
import { User, Coins, Menu, XCircle, Gamepad, Bot,LayoutDashboard } from 'lucide-react';
import DoraImage from '@/assets/img/welcome_dora.png';
import { useState } from 'react';
import GameCard from '@/components/Card/GameCard';


function HomePage() {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };
    return (
        <Container>
            <Header>
                <AvatarAndCoins >
                    <User size={20} color='white' />
                    <CoinBalance>
                        <Coins size={20} color='#FFEB3B' /><p>1000</p>
                    </CoinBalance>
                </AvatarAndCoins>
                <LeaderboardButton>
                    <LayoutDashboard size={20} color='#ffd700' />
                </LeaderboardButton>
                <MenuIcon onClick={toggleSidebar}>
                    <Menu size={20} color='#ffd700' />
                </MenuIcon>
            </Header>
            <Sidebar $isOpen={isSidebarOpen}>
                <SidebarCloseButton onClick={toggleSidebar}>
                    <XCircle size={30} color='#ffd700' />
                </SidebarCloseButton>
                <SidebarContent>
                    <GameButton>Play with random</GameButton>
                    <GameButton>Offline play</GameButton>
                    <GameButton>Pass N Play</GameButton>
                </SidebarContent>
            </Sidebar>
            <SideBySide>
                <GameCard title="PLAY WITH RANDOM"
                    subtitle="Find your opponent and start playing"
                    IconComponent={Gamepad} IconSize={50} />
                <GameCard title="OFFLINE PLAY"
                    subtitle="Play with the clever Fox Dora"
                    IconComponent={Bot} />
                <GameCard title="PASS N PLAY"
                    subtitle="Play with your friend"
                    IconComponent={User} />

            </SideBySide>
            <Mascot>
                <MascotImage src={DoraImage} alt="Dora" />
            </Mascot>

        </Container>
    )
}

export const Container = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        min-height: 100vh;
        position: relative;
        background: linear-gradient(180deg, #23282B 0%, #000000 100%);
        overflow: hidden;

    `;

const Header = styled.div`
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: absolute;
        top: 0;
        width: 100%;
        padding: 1.25rem;
        
        @media (max-width: 768px) {
            padding: 1rem;
        }

    `;

const AvatarAndCoins = styled.div`
        display: flex;
        align-items: center;
    `;

const CoinBalance = styled.div`
        display: flex;
        align-items: center;
        margin-left: 10px;
        p {
            margin-left: 5px;
        }
        color: #ffd700;   

        &:hover {
            transform: translateY(-8px);
        }
    `;

const MenuIcon = styled.div`
        display: flex;
        align-items: center;
        justify-content: center;
        width: 50px;
        height: 50px;
        cursor: pointer;
        transition: transform 0.2s;

        &:hover {
            transform: translateY(-8px);
        }
    `;

const Mascot = styled.div`
        position: absolute;
        bottom: 0;
        left: 0;
        z-index: 10;
    `;

const MascotImage = styled.img`
    width: 100px;
    height: auto;
    margin: 0;

    @media (max-width: 768px) {
        width: 4.375rem; 
    }
`;

const GameButton = styled.button`
  background-color: #000;
  color: #fff;
  padding: 20px;
  border: none;
  border-radius: 10px;
  margin: 10px;
  cursor: pointer;
`;

const Sidebar = styled.div<{ $isOpen: boolean }>`
    position: fixed;
    top: 0;
    right: 0;
    width: 300px;
    height: 100%;
    background: #161719;
    box-shadow: -2px 0px 5px rgba(0, 0, 0, 0.5);
    transform: ${({ $isOpen }) => $isOpen ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.3s ease-in-out;
    z-index: 100;
    border-right: 1px solid #000;
    border-left: 1px solid #ffd700;

    @media (max-width: 768px) {
        width: 100%;
    }
`;

const SidebarCloseButton = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;
    cursor: pointer;
    margin: 10px;
    transition: transform 0.2s;

    &:hover {
        transform: translateY(-8px);
    }
`;

const SidebarContent = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    margin-top: 100px;
`;

const SideBySide = styled.div`
  display: flex;
  flex-wrap: wrap; /* Allows items to wrap onto the next line */
  justify-content: center; /* Center the items on the page */
  gap: 20px; /* Spacing between each GameCard */
  padding: 20px; /* Padding around the container */

  @media (max-width: 768px) { /* Adjusts for tablets and smaller */
    flex-direction: column;
    align-items: center; /* Aligns items vertically when stacked */
  }
`;

const LeaderboardButton = styled.button`
  background-color: #000;
  color: #fff;
  padding: 20px;
  border: none;
  border-radius: 10px;
  margin: 10px;
  cursor: pointer;

  &:hover {
    transform: translateY(-8px);
  }
`;

export default HomePage