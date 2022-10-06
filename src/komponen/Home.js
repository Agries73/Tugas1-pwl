import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetListBarang } from '../action/barang';
import{Col,Card}from 'react-bootstrap'

function Home() {
  const { getlistbaranghasil, getlistbarangloading, getlistbarangerror } = useSelector((state) => state.listbarang)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetListBarang());

  }, [dispatch])
  return (
    <div>
    <p style={{textAlign:'center',fontSize:'30'}}>Daftar Belanjaan</p>
    {getlistbaranghasil?(
      getlistbaranghasil.map((barang)=>{
        return(
          <Col md={3} xs={3} className="mb-3">
            <Card style={{ width: '35rem',display:'block',float:'left',textAlign:'center',margin:40 }}>
                <Card.Img variant="top" src={"foto/"+barang.category.nama.toLowerCase()+"/"+barang.gambar} />
                <Card.Body>
                    <Card.Title>{barang.nama}</Card.Title>
                    <Card.Text>
                        Harga : Rp.{barang.harga}
                    </Card.Text>
                    <Card.Text>
                        Jumlah Beli : {barang.jumlah}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
        )
      })
    ): getlistbarangloading?(
      <p>loading bang</p>
    ):(<p>{getlistbarangerror?getlistbarangerror:'data kosong'}</p>)}

    </div>
  )
}

export default Home