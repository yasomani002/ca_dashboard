import React from 'react'
import Layout from '../common/Layout'
import { useForm } from 'react-hook-form'
import { Button, Header, Input } from '../common'
import { makeStyles } from '@mui/styles'
import { color } from '../assets/constant'

const useStyles = makeStyles({
    root: {
        backgroundColor: color.secondary,
        height: '90vh',
        width: '100%'
    },
    documentContainer: {
        display: 'flex',

    }
})

function Document() {
    const classes = useStyles()
    const { handleSubmit, register } = useForm()

    const uploadDocument = (data) => {
        console.log(data, 'data')
    }

    return (
        <Layout>
            <Header />

            <div className={classes.root}>
                <form onSubmit={handleSubmit(uploadDocument)}>
                    <div className={`w-2/3 ${classes.documentContainer}`}>
                        <h2>Upload your aadhar card</h2>
                        <Input
                            name="aadhar"
                            type="file"
                            accept=".pdf"
                            {...register('aadhar', {
                                required: true
                            })}
                            className='w-1/2'
                        />
                    </div>

                    <div className={`w-2/3 ${classes.documentContainer}`}>
                        <h2>Upload your Pan card</h2>
                        <Input
                            name="pan"
                            type="file"
                            accept=".pdf"
                            {...register('pan', {
                                required: true
                            })}
                            className='w-1/2'
                        />
                    </div>
                    <Button>Submit</Button>
                </form>
            </div>
        </Layout>
    )
}

export default Document
