import styled from 'styled-components'

export const HomeContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3rem;
  }
  @media (max-width: 768px) {
    form {
      gap: 3rem;
    }
  }
`
export const BtnsContainer = styled.div`
  display: flex;
  gap: 0.5rem;
`
export const BaseCountdownBtn = styled.button`
  width: 100%;
  border: 0;
  padding: 1rem;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-weight: bold;
  cursor: pointer;
  color: ${(props) => props.theme['gray-100']};

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`

export const CountdownStartBtn = styled(BaseCountdownBtn)`
  background: ${(props) => props.theme['gray-600']};

  &:not(:disabled):hover {
    background: ${(props) => props.theme['gray-700']};
  }
`
export const PauseCountdownBtn = styled(BaseCountdownBtn)`
  background: ${(props) => props.theme['gray-600']};
`

export const StopCountdownBtn = styled(BaseCountdownBtn)`
  background: ${(props) => props.theme['red-500']};

  &:not(:disabled):hover {
    background: ${(props) => props.theme['red-700']};
  }
`
