import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetListToko } from '../action/toko';
import{Col,Card}from 'react-bootstrap'

function Toko() {
  const { getlisttokohasil, getlisttokoloading, getlisttokoerror } = useSelector((state) => state.listtoko)
  const dispatch = useDispatch();

  useEffect(() => {
    console.log('1.did mount');
    dispatch(GetListToko());

  }, [dispatch])
  return (
    <div>
    <p style={{textAlign:'center',fontSize:'30'}}>Daftar Toko</p>
    {getlisttokohasil?(
      getlisttokohasil.map((toko)=>{
        return(
          <Col md={3} xs={3} className="mb-3">
            <Card style={{ width: '35rem',display:'block',float:'left',textAlign:'center',margin:40 }}>
                <Card.Img variant="top" src={"foto/"+toko.category.nama.toLowerCase()+"/"+toko.gambar} />
                <Card.Body>
                    <Card.Title>{toko.nama}</Card.Title>
                    <Card.Text>
                        Menjual : {toko.menjual}
                    </Card.Text>
                    <Card.Text>
                        Jarak : {toko.jarak}
                    </Card.Text>
                    <Card.Text>
                        Alamat : <a href="https://www.google.co.id/maps/">Click Here</a>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
        )
      })
    ): getlisttokoloading?(
      <p>loading bang</p>
    ):(<p>{getlisttokoerror?getlisttokoerror:'data kosong'}</p>)}

    </div>
  )
}



export default Toko