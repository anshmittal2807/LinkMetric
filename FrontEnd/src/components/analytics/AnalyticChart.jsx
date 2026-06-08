import{Line} from 'react-chartjs-2';


const AnalyticChart = () => {
    return <>
    <div className="w-full h-100 bg-[#FCF8FF] rounded-lg mt-4">
        <h1 className="text-2xl font-bold text-center pt-4">Analytic Chart</h1>

        <Line
            data ={{
                labels:['January','February','March','April','May','June'],
                datasets:[
                        {
                            label:'sales',
                            data:[12,6,5,4,2,1,341,23,123,1,231,231,23,12,31]
                        }

                ]
            }}
        
        />



    </div>



    </>
}

export default AnalyticChart;