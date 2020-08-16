import styled from 'styled-components'

const Wrapper = styled.section`
  max-width: 2000px;
  // width: 100%;
  margin: 0 auto;
  padding-left: 4rem;
  padding-right: 4rem;
  box-sizing: border-box;
  @media (max-width: 1024px) {
    max-width: 90%;
    padding: 0 15px;
  }
`

const FormWrapper = styled.form`
  padding: 25px;
  width: 100%;
  max-width: 600px;
  background-color: #ffffff;
  border-radius: 5px;
`

const blockTextCenter = {
  textAlign: 'center',
  width: '100%',
  display: 'block'
}

const confirmBtnInModal = {
  marginTop: '10px',
  maxWidth: '150px',
  width: '100%'
}

export { Wrapper, FormWrapper, blockTextCenter, confirmBtnInModal }
