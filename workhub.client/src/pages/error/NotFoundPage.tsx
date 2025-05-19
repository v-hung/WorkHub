import { wrapLoader } from "@/utils/loader";
import "./NotFoundPage.css";
import ButtonLink from "@/ui/elements/ButtonLink";

export const loader = wrapLoader();

export function Component() {
  return (
    <div className="page">
      <div className="page__container">
        <div className="page__status">404</div>
        <div className="page__title">Oops! Page not found</div>
        <div className="page__description">
          Sorry, but the page you are looking for is not found. Please, make
          sure you have typed the current URL
        </div>
        <ButtonLink
          href="/"
          variant="solid"
          color="cyan"
          icon={<IIonHome width={16} height={16} />}
        >
          Go home
        </ButtonLink>
      </div>
    </div>
  );
}
