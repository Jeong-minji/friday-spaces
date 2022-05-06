import styled from '@emotion/styled'
import { Button, Helmet } from 'components'
import { DesignContainer, DesignContent } from 'styles/content'

const Design = () => {
  return (
    <DesignContainer>
      <Helmet title="Sample Style Guide" description="스타일 가이드" />
      <Title>
        디자인 시스템은 좀... 일 키우는 것 같은... 예감이 없지 않아 있는 👻...
      </Title>
      <DesignContent>
        <Button buttonType="Secondary" buttonColor="yellow_8" label="버튼" />
        <Button buttonType="Secondary" buttonColor="yellow_24" label="버튼" />
        <Button buttonType="Secondary" buttonColor="yellow_40" label="버튼" />
        <Button buttonType="Secondary" buttonColor="yellow_64" label="버튼" />
        <Button buttonType="Secondary" buttonColor="yellow_100" label="버튼" />
        <Button
          buttonType="Secondary"
          buttonColor="yellow_gradient"
          label="버튼"
        />
      </DesignContent>
      <DesignContent>
        <Button buttonType="Secondary" buttonColor="green_8" label="버튼" />
        <Button buttonType="Secondary" buttonColor="green_24" label="버튼" />
        <Button buttonType="Secondary" buttonColor="green_40" label="버튼" />
        <Button buttonType="Secondary" buttonColor="green_64" label="버튼" />
        <Button buttonType="Secondary" buttonColor="green_100" label="버튼" />
        <Button
          buttonType="Secondary"
          buttonColor="green_gradient"
          label="버튼"
        />
      </DesignContent>
      <DesignContent>
        <Button buttonType="Secondary" buttonColor="blue_8" label="버튼" />
        <Button buttonType="Secondary" buttonColor="blue_24" label="버튼" />
        <Button buttonType="Secondary" buttonColor="blue_40" label="버튼" />
        <Button buttonType="Secondary" buttonColor="blue_64" label="버튼" />
        <Button buttonType="Secondary" buttonColor="blue_100" label="버튼" />
        <Button
          buttonType="Secondary"
          buttonColor="blue_gradient"
          label="버튼"
        />
      </DesignContent>
      <DesignContent>
        <Button buttonType="Secondary" buttonColor="pink_8" label="버튼" />
        <Button buttonType="Secondary" buttonColor="pink_24" label="버튼" />
        <Button buttonType="Secondary" buttonColor="pink_40" label="버튼" />
        <Button buttonType="Secondary" buttonColor="pink_64" label="버튼" />
        <Button buttonType="Secondary" buttonColor="pink_100" label="버튼" />
        <Button
          buttonType="Secondary"
          buttonColor="pink_gradient"
          label="버튼"
        />
      </DesignContent>
      <DesignContent>
        <Button buttonType="Secondary" buttonColor="red_8" label="버튼" />
        <Button buttonType="Secondary" buttonColor="red_24" label="버튼" />
        <Button buttonType="Secondary" buttonColor="red_40" label="버튼" />
        <Button buttonType="Secondary" buttonColor="red_64" label="버튼" />
        <Button buttonType="Secondary" buttonColor="red_100" label="버튼" />
        <Button
          buttonType="Secondary"
          buttonColor="red_gradient"
          label="버튼"
        />
      </DesignContent>
    </DesignContainer>
  )
}

export default Design

const Title = styled.h1`
  margin: 20px;
  text-align: center;
  font-size: 30px;
  cursor: default;
  &::selection {
    background: transparent;
  }
`
