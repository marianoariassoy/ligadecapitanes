import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { BeatLoader } from 'react-spinners'
import { Helmet } from 'react-helmet'
import axios from 'axios'
import { Input, Button, Select } from '../../ui'
import { texts, days, months, years } from '../../lib/data'
import Gracias from './Gracias'
import Error from './Error'
import Messages from '../../components/Messages'
import Header from '../../components/Header'

const RegistrarUsuario = () => {
  const [sended, setSended] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState(null)
  const [image, setImage] = useState()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm()

  const onSubmit = async data => {
    setSending(true)
    const formData = new FormData()
    formData.append('data', JSON.stringify(data))
    formData.append('file', image)

    try {
      const response = await axios.post('https://ligadecapitanes.com.ar/api/users/register', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      if (response.data.success) {
        setError(null)
        setSending(false)
        setSended(true)
        window.scrollTo(0, 0)
      } else {
        setError(response.data.message)
        setSending(false)
      }
    } catch (error) {
      setError(error)
      setSending(false)
    }
  }

  const password = watch('password', '')

  const getFile = e => {
    const file = e.target.files[0]
    setImage(file)
  }

  if (sended) return <Gracias />

  return (
    <section>
      <div className='flex flex-col gap-y-6 max-w-md m-auto lg:max-w-none'>
        {!sended && (
          <Header
            title='¡Bienvenido!'
            emoji='👋'
            description='Completá el formulario con tus datos y se parte de nuestra liga.'
          />
        )}
        <div className='w-full m-auto'>
          {error && <Messages text={error} />}

          <form
            onSubmit={handleSubmit(onSubmit)}
            className={`${sended ? 'hidden' : 'block'}`}
          >
            <div className='grid lg:grid-cols-2 gap-x-6'>
              <div className='form-control'>
                <Input
                  type='text'
                  title='Nombre'
                  placeholder='Gastón Norberto'
                  register={register('name', { required: texts.required })}
                />
                {errors.name && <Error text={errors.name.message} />}
              </div>
              <div className='form-control'>
                <Input
                  type='text'
                  title='Apellido'
                  placeholder='Gaudio'
                  register={register('lastname', { required: texts.required, maxLength: 20 })}
                />
                {errors.lastname && <Error text={errors.lastname.message} />}
              </div>
              <div className='form-control'>
                <Input
                  type='text'
                  title='Télefono'
                  placeholder='11 1111-1111'
                  register={register('phone', { maxLength: 20 })}
                />
                {errors.phone && <Error text={errors.phone.message} />}
              </div>
              <div className='form-control'>
                <Input
                  type='text'
                  title='Localidad'
                  placeholder='Temperley'
                  register={register('location')}
                />
              </div>
              <div className='form-control'>
                <Input
                  type='email'
                  title='Email'
                  placeholder='gastongaudio@gmail.com'
                  register={register('email', {
                    required: texts.required,
                    maxLength: 50,
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: 'Dirección de correo electrónico inválida'
                    }
                  })}
                />
                {errors.email && <Error text={errors.email.message} />}
              </div>
              <div className='form-control'>
                <Input
                  type='text'
                  title='DNI'
                  placeholder='12345678'
                  register={register('dni', {
                    required: texts.required,
                    pattern: {
                      value: /^[0-9]+$/,
                      message: 'Solo se permiten números'
                    },
                    validate: value => value.length === 8 || 'La longitud del DNI deben ser 8 números'
                  })}
                />
                {errors.dni && <Error text={errors.dni.message} />}
              </div>
              <div className='form-control'>
                <Input
                  type='password'
                  title='Contraseña'
                  placeholder='contraseña'
                  register={register('password', {
                    required: texts.required,
                    validate: value => value.length > 4 || 'La longitud debe ser mayor a 4 caracteres'
                  })}
                />
                {errors.password && <Error text={errors.password.message} />}
              </div>
              <div className='form-control'>
                <Input
                  type='password'
                  title='Repetir contraseña'
                  placeholder='contraseña'
                  register={register('confirmPassword', {
                    required: texts.required,
                    validate: value => value === password || 'Las contraseñas no coinciden'
                  })}
                />
                {errors.confirmPassword && <Error text={errors.confirmPassword.message} />}
              </div>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text text-primary font-medium'>Fecha de nacimiento</span>
                </label>
                <div className='flex gap-x-3'>
                  <Select
                    options={days}
                    register={register('day', { required: true })}
                    title='9'
                  />
                  <Select
                    options={months}
                    register={register('month', { required: true })}
                    title='12'
                  />
                  <Select
                    options={years}
                    register={register('year', { required: true })}
                    title='1978'
                  />
                </div>
                {(errors.day || errors.month || errors.year) && <Error text={texts.required} />}
              </div>
              <div className='form-control'>
                <label className='label'>
                  <span className='label-text text-primary font-medium'>Foto de perfil (sugerido)</span>
                </label>
                <input
                  type='file'
                  accept='image/*'
                  name='file'
                  register={register('file')}
                  className='file:mr-4 file:rounded-full file:border-0 file:bg-primary file:px-4 file:py-3 file:h-12 file:text-sm file:font-semibold hover:file:bg-secondary file:cursor-pointer'
                  onChange={getFile}
                />
                {image && (
                  <div className='my-3'>
                    <img
                      src={URL.createObjectURL(image)}
                      alt='Vista previa de la foto'
                      className='w-24 h-24 rounded-full object-cover object-center'
                    />
                  </div>
                )}
              </div>
            </div>
            <div className='form-control mt-6 flex items-center justify-center'>
              {sending ? (
                <div className='mt-4'>
                  <BeatLoader />
                </div>
              ) : (
                <Button>Registrate</Button>
              )}
            </div>
            <div className='mt-6'>
              <p className='text-sm text-secondary text-center'>
                En nuestro sitio web solo se mostrarán tu nombre, apellido y foto de perfil.
                <br />
                El resto de los datos se encuentran protegidos y nadie por fuera de la organiazación tiene acceso a
                ellos.
              </p>
            </div>
          </form>
        </div>
      </div>
      <Helmet>
        <title>Bienvenido - Liga de Capitanes</title>
      </Helmet>
    </section>
  )
}

export default RegistrarUsuario
