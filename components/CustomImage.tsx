import Image from 'next/image';

type Props = {
    src: string,
    width: number,
    height: number,
    alt: string,
    className: string
}

const CustomImage = (props: Props) => {
  return (
    <div className={props.className}>
        <Image className="object-contain rounded-full md:rounded-full" alt={props.alt} src={props.src} width={props.width} height={props.height}/>
    </div>
  )
}

export default CustomImage