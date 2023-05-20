
function get_sum_rest_operator( ...etc)
{
    let sum=0;
    console.log("rest priented",etc);
    for(let i of etc)
    {
        sum+=i;
    }
    return sum;
}
console.log(get_sum_rest_operator(12,23));
