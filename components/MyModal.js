import styled from "@emotion/styled"
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
} from "reactstrap"

export default function MyModal({ modal, setModal }) {
  const toggle = () => setModal(!modal)

  return (
    <StyledModal>
      <Modal isOpen={modal} toggle={toggle}>
        <Form>
          <ModalHeader toggle={toggle}>Booking Mobil</ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for="exampleEmail">Nama</Label>
              <Input
                required
                type="text"
                name="nama"
                id="exampleNama"
                placeholder="masukan nama"
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input
                required
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="with a placeholder"
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">No. Handphone</Label>
              <Input
                required
                type="text"
                name="hp"
                id="exampleHp"
                placeholder="masukan no hp"
              />
            </FormGroup>
            <FormGroup>
              <div className="row">
                <div className="col-6">
                  <Label for="exampleSelect">Mobil</Label>
                  <Input
                    required
                    type="select"
                    name="select"
                    id="exampleSelect"
                  >
                    <option>XL 7</option>
                    <option>Ertiga</option>
                    <option>All New Ertiga Sports</option>
                    <option>New Ignis</option>
                    <option>Karimun</option>
                  </Input>
                </div>
                <div className="col-6">
                  <Label for="exampleSelect">Tipe</Label>
                  <Input
                    required
                    type="select"
                    name="select"
                    id="exampleSelect"
                  >
                    <option>Alpha A/T</option>
                    <option>Alpha M/T</option>
                    <option>Beta A/T</option>
                    <option>Beta M/T</option>
                    <option>Zeta A/T</option>
                    <option>Zeta M/T</option>
                  </Input>
                </div>
              </div>
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button onClick={toggle}>batal</Button>
            <Button color="primary" type="submit">
              kirim
            </Button>
          </ModalFooter>
        </Form>
      </Modal>
    </StyledModal>
  )
}

const StyledModal = styled.div``
