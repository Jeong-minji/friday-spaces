import styled from '@emotion/styled'

export const UserStyle = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  .thumbnail {
    overflow: hidden;
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }
  .user-info {
    display: flex;
    flex-direction: column;
    &__welcome {
      line-height: 24px;
      color: ${({ theme }) => theme.color.gray_5};
      font-size: 18px;
    }
    &__username {
      line-height: 32px;
      color: ${({ theme }) => theme.color.gray_6};
      font-size: 24px;
      font-weight: 700;
    }
  }
`
