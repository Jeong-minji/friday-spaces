import styled from '@emotion/styled'

export const PageStyle = styled.section`
  flex: 1;
  padding: 32px 24px;
  background: ${({ theme }) => theme.color.white};
  border: 1px solid ${({ theme }) => theme.color.gray_3};
  border-left: 0;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
`

export const DesignContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const DesignContent = styled.div`
  display: flex;
  justify-content: center;
  gap: 8px;
  padding: 10px 0;
`
