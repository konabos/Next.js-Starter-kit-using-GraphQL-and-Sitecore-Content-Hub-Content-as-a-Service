import cn from 'classnames';

type Props = {
  title: string;
  src: string;
};

const CoverImage = ({ title, src }: Props) => {
  const image = (
    <img
      src={src}
      alt={title}
      className={cn('w-auto shadow-small', {
        'hover:shadow-medium transition-shadow duration-200': src,
      })}
    />
  );
  return (
    <div className="sm:mx-0">
      {src ? <a aria-label={title}>{image}</a> : image}
    </div>
  );
};

export default CoverImage;
