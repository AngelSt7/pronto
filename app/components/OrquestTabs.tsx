import { dynamicSchedules } from "@/src/helpers/dynamic-scheldules.helper";
import PanelTasks from "./PanelTasks";
import { getTasksServer } from "@/src/server/getTasks.server";

export type Tab = "login" | "aceptTask";

export default async function OrquestTabs({ token }: { token: string }) {
    const data = await getTasksServer(token);
    const schedules = dynamicSchedules();
    // const [user, setUser] = useState<User | null>(null);

    return (
        <>
            <PanelTasks schedules={schedules} data={data}  token={token} />
        </>
    )
}
