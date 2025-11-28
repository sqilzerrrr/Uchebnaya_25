const UslugiComponent = () => {
    return (
        <div className="w-full text-pretty ml-33.75 flex">
            <div className="w-[444px] mt-50">
                <h1 className="font-semibold text-[45px] text-[#495E4C]">Предоставляемые</h1>
                <h1 className="font-semibold text-[45px] text-[#495E4C]">Услуги</h1>
                <p className="text-base text-[#848484] mt-10">При разработке проекта предложим техническое решение
                    оптимальное по соотношению цены и качества, оно идеально впишется в ваш дизайн, а также будет учитывать все ваши пожелания.</p>
                <p className="text-base text-[#848484] mt-10">Монтаж выполняется опытными бригадами с соблюдением всех действующих технических норм, правил безопасности и строго по согласованному проекту.</p>
                <p className="text-base text-[#848484] mt-10">Одинаково эффективно выполняем проектирование и монтаж на объектах любой сложности – от небольшой квартиры, до объектов со сложными
                    технологическими процессами на основе действующей нормативной документации.</p>
            </div>
            <div className="flex flex-col items-center ml-39.5 mt-25">
                <div className="flex rounded-t-[45px] flex-row px-3 pt-3 bg-[#D9FADD] w-fit">
                    <button id="myau" className="text-[#7CA281] cursor-pointer flex gap-6 items-center px-6 py-4 rounded-tl-[40px] bg-[#FFFFFF]">Кондиционирование<img src="GroupKand.svg" alt="myau" className="w-[33px] h-[27px]" /></button>
                    <button id="muay" className="text-[#FFFFFF] cursor-pointer flex gap-6 items-center px-6 py-4 rounded-tr-[40px] bg-[#5CCD6A]">Система Вентиляции<img src="Group.svg" alt="myau1" className="w-[33px] h-[33px]" /></button>
                </div>
                <div className="bg-[#D9FADD] rounded-[65px] w-[676px] h-[655px] flex justify-between">
                    <div className="ml-[33px] mt-[127.13px] mb-[121.13px]">
                        <p className="flex text-[#495D4C] w-[307px] h-[60px] mt-[11px]"><img src="./Group_20359_copy.svg" className="w-[34px] text-[20px] h-[34px] mr-[15px]" />Проектирование систем вентиляции любой сложности</p>
                        <p className="flex text-[#495D4C] w-[307px] h-[60px] mt-[11px]"><img src="./Group_20360.svg" className="w-[34px] text-[20px] h-[34px] mr-[15px]" />Монтаж приточной вентиляции</p>
                        <p className="flex text-[#495D4C] w-[307px] h-[60px] mt-[11px]"><img src="./Group_20361.svg" className="w-[34px] text-[20px] h-[34px] mr-[15px]" />Монтаж вытяжной вентиляции</p>
                        <p className="flex text-[#495D4C] w-[307px] h-[60px] mt-[11px]"><img src="./Group_20362.svg" className="w-[34px] text-[20px] h-[34px] mr-[15px]" />Монтаж вентиляции с увлажнением воздуха</p>
                        <p className="flex text-[#495D4C] w-[307px] h-[60px] mt-[11px]"><img src="./Group_20363.svg" className="w-[34px] text-[20px] h-[34px] mr-[15px]" />Монтаж вентиляции с рекуператором</p>
                        <p className="flex text-[#495D4C] w-[307px] h-[60px] mt-[11px]"><img src="./Group_20364.svg" className="w-[34px] text-[20px] h-[34px] mr-[15px]" />Монтаж вентиляции с осушением для бассейна</p>
                    </div>
                    <img src="Rectangle 4285.svg" alt="myau" className="object-cover rounded-tr-[71px] rounded-br-[70px]" />
                </div>
            </div>
        </div>
    )
}
export default UslugiComponent