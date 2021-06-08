import Introduction from "../intro/introduction";
import Questionnaire from "../questionnaire/questionnaire";

export default function Home() {
    const test = "hello";

    return(
        <div>
            <Introduction />
            <Questionnaire />
        </div>
    );
}